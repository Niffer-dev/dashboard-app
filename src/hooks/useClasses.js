import { useState, useMemo, useEffect, useCallback } from "react";
import axios from "axios";
import { useSSE } from "../context/SSEProvider";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function useClasses() {
  const [classList, setClassList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formState, setFormState] = useState({
    name: "",
    capacity: "",
    total: "",
    level: "",
    shift: "",
    teacher: "",
    subject: "",
    room: "",
  });
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [showFullOnly, setShowFullOnly] = useState(false);
  const events = useSSE();

  // Fetch classes
  const fetchClasses = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/api/classes`);
      const classes = response.data.data || [];
      setClassList(classes);
    } catch (error) {
      console.error("Failed to fetch classes:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchClasses();
  }, [fetchClasses]);

  // SSE updates
  useEffect(() => {
    if (!events || events.length === 0) return;
    const latest = events[events.length - 1];

    const handleUpdate = () => {
      switch (latest.type) {
        case "class_create":
          setClassList((prev) => [...prev, latest.data]);
          break;
        case "class_update":
          setClassList((prev) =>
            prev.map((cls) =>
              cls._id === latest.data._id ? latest.data : cls,
            ),
          );
          break;
        case "class_delete":
          setClassList((prev) =>
            prev.filter((cls) => cls._id !== latest.data.id),
          );
          break;
        default:
          break;
      }
    };

    handleUpdate();
  }, [events]);

  // Form helpers
  const resetForm = () => {
    setEditingId(null);
    setFormState({
      name: "",
      capacity: "",
      total: "",
      level: "",
      shift: "",
      teacher: "",
      subject: "",
      room: "",
    });
  };

  const isEditing = editingId !== null;

  const openNewClass = () => {
    resetForm();
    setOpen(true);
  };

  const openEditClass = (cls) => {
    setEditingId(cls._id);
    setFormState({
      name: cls.name || "",
      capacity: String(cls.capacity || ""),
      total: String(cls.total || ""),
      level: String(cls.level || ""),
      shift: cls.shift || "",
      teacher: cls.teacher || "",
      subject: cls.subject || "",
      room: cls.room || "",
    });
    setOpen(true);
  };

  const handleFormChange = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveClass = async (e) => {
    e.preventDefault();

    const capacity = Number(formState.capacity);
    const total = Number(formState.total);
    const level = Number(formState.level);

    if (
      !formState.name ||
      isNaN(capacity) ||
      isNaN(total) ||
      isNaN(level) ||
      !formState.shift ||
      !formState.teacher
    ) {
      alert("Please fill in all required fields correctly.");
      return;
    }

    if (level < 1 || level > 12) {
      alert("Level must be between 1 and 12");
      return;
    }

    const payload = {
      name: formState.name,
      capacity,
      total,
      level,
      shift: formState.shift.toUpperCase(),
      teacher: formState.teacher,
      subject: formState.subject,
      room: formState.room,
      status: "open",
    };

    try {
      if (isEditing) {
        await axios.put(`${API_BASE_URL}/api/classes/${editingId}`, payload, {
          withCredentials: true,
        });
      } else {
        await axios.post(`${API_BASE_URL}/api/classes`, payload, {
          withCredentials: true,
        });
      }
      setOpen(false);
      resetForm();
    } catch (error) {
      console.error("Error saving class:", error);
      alert(error.response?.data?.message || "Error saving class");
    }
  };

  const handleDeleteClass = async (id) => {
    if (!confirm("Delete this class?")) return;
    try {
      await axios.delete(`${API_BASE_URL}/api/classes/${id}`);
      if (editingId === id) {
        resetForm();
        setOpen(false);
      }
    } catch (error) {
      console.error("Error deleting class:", error);
      alert("Failed to delete class");
    }
  };

  const filteredClasses = useMemo(() => {
    return classList.filter((item) => {
      if (showFullOnly && Number(item.capacity) < Number(item.total))
        return false;

      if (!search) return true;

      const query = search.toLowerCase();
      const text =
        `${item.name} ${item.teacher} ${item.shift} ${item.level}`.toLowerCase();

      switch (filterType) {
        case "name":
          return String(item.name).toLowerCase().includes(query);
        case "shift":
          return String(item.shift).toLowerCase().includes(query);
        case "level":
          return String(item.level).toLowerCase().includes(query);
        case "teacher":
          return String(item.teacher).toLowerCase().includes(query);
        default:
          return text.includes(query);
      }
    });
  }, [classList, filterType, search, showFullOnly]);

  return {
    classList,
    filteredClasses,
    loading,
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
    refreshClasses: fetchClasses,
  };
}
