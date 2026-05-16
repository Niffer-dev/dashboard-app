import { useState, useMemo, useEffect } from "react";
import { classes as initialClasses } from "../lib/data";

const initialFormState = {
  name: "",
  capacity: "",
  total: "",
  level: "",
  shift: "",
  teacher: "",
  subject: "",
  room: "",
};

const loadClasses = () => {
  try {
    const raw = localStorage.getItem("classList");
    if (!raw) return initialClasses;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : initialClasses;
  } catch (error) {
    return initialClasses;
  }
};

export function useClasses() {
  const [classList, setClassList] = useState(() => loadClasses());
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formState, setFormState] = useState(initialFormState);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [showFullOnly, setShowFullOnly] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("classList", JSON.stringify(classList));
    } catch (error) {
      // ignore storage errors
    }
  }, [classList]);

  const resetForm = () => {
    setEditingId(null);
    setFormState(initialFormState);
  };

  const isEditing = editingId !== null;

  const openNewClass = () => {
    resetForm();
    setOpen(true);
  };

  const openEditClass = (item) => {
    setEditingId(item.id);
    setFormState({
      name: item.name || "",
      capacity: String(item.capacity || ""),
      total: String(item.total || ""),
      level: String(item.level || ""),
      shift: item.shift || "",
      teacher: item.teacher || "",
      subject: item.subject || "",
      room: item.room || "",
    });
    setOpen(true);
  };

  const handleFormChange = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveClass = (event) => {
    event.preventDefault();

    const capacity = Number(formState.capacity);
    const total = Number(formState.total);
    const level = Number(formState.level);

    if (
      !formState.name ||
      Number.isNaN(capacity) ||
      Number.isNaN(total) ||
      Number.isNaN(level) ||
      !formState.shift ||
      !formState.teacher
    ) {
      return;
    }

    if (isEditing) {
      setClassList((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? { ...item, ...formState, capacity, total, level }
            : item
        )
      );
    } else {
      const nextId = classList.length > 0 ? Math.max(...classList.map((item) => item.id)) + 1 : 1;
      setClassList((prev) => [...prev, { id: nextId, ...formState, capacity, total, level }]);
    }

    setOpen(false);
    resetForm();
  };

  const handleDeleteClass = (id) => {
    if (!confirm("Delete this class?")) return;
    setClassList((prev) => prev.filter((item) => item.id !== id));
    if (editingId === id) {
      resetForm();
      setOpen(false);
    }
  };

  const filteredClasses = useMemo(() => {
    return classList.filter((item) => {
      if (showFullOnly && Number(item.capacity) < Number(item.total)) return false;

      if (!search) return true;

      const query = search.toLowerCase();
      const text = `${item.name} ${item.teacher} ${item.shift} ${item.level}`.toLowerCase();

      if (filterType === "all") {
        return text.includes(query);
      }

      if (filterType === "name") {
        return String(item.name).toLowerCase().includes(query);
      }

      if (filterType === "shift") {
        return String(item.shift).toLowerCase().includes(query);
      }

      if (filterType === "level") {
        return String(item.level).toLowerCase().includes(query);
      }

      if (filterType === "teacher") {
        return String(item.teacher).toLowerCase().includes(query);
      }

      return true;
    });
  }, [classList, filterType, search, showFullOnly]);

  return {
    classList,
    filteredClasses,
    open,
    setOpen,
    isEditing,
    formState,
    editingId,
    search,
    filterType,
    showFullOnly,
    setSearch,
    setFilterType,
    setShowFullOnly,
    openNewClass,
    openEditClass,
    handleFormChange,
    handleSaveClass,
    handleDeleteClass,
    resetForm,
  };
}
