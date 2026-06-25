import { useState } from "react";
import StatCard from "../components/ui/StatCard";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../components/ui/dialog";
import {
  MoreVertical,
  Edit2,
  Trash2,
  Search,
  CheckCircle,
  Clock,
  AlertCircle,
  Plus,
  Users,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Website Redesign",
      status: "Active",
      team: ["John", "Sarah", "Mike"],
      progress: 65,
      startDate: "2024-01-15",
      endDate: "2024-06-30",
      description: "Complete redesign of company website",
    },
    {
      id: 2,
      name: "Mobile App Development",
      status: "Active",
      team: ["Alex", "Emma", "David"],
      progress: 45,
      startDate: "2024-02-01",
      endDate: "2024-08-15",
      description: "Native mobile app for iOS and Android",
    },
    {
      id: 3,
      name: "Database Migration",
      status: "Completed",
      team: ["Robert"],
      progress: 100,
      startDate: "2023-12-01",
      endDate: "2024-03-15",
      description: "Migration from legacy to modern database",
    },
    {
      id: 4,
      name: "API Integration",
      status: "On Hold",
      team: ["Lisa", "Tom"],
      progress: 30,
      startDate: "2024-03-10",
      endDate: "2024-07-20",
      description: "Third-party API integration",
    },
    {
      id: 5,
      name: "Security Audit",
      status: "Active",
      team: ["Security Team"],
      progress: 80,
      startDate: "2024-04-01",
      endDate: "2024-06-15",
      description: "Full security audit and compliance check",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [formState, setFormState] = useState({
    name: "",
    status: "Active",
    team: "",
    progress: 0,
    startDate: "",
    endDate: "",
    description: "",
  });

  // Calculate stats
  const totalProjects = projects.length;
  const activeProjects = projects.filter((p) => p.status === "Active").length;
  const completedProjects = projects.filter(
    (p) => p.status === "Completed"
  ).length;

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus =
      filterStatus === "All" || project.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Handle form changes
  const handleFormChange = (field, value) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Save project
  const handleSaveProject = () => {
    if (!formState.name.trim()) {
      alert("Please enter project name");
      return;
    }

    if (isEditing) {
      setProjects(
        projects.map((p) =>
          p.id === formState.id
            ? { ...p, ...formState, team: formState.team.split(",") }
            : p
        )
      );
    } else {
      const newProject = {
        ...formState,
        id: Math.max(...projects.map((p) => p.id), 0) + 1,
        team: formState.team
          .split(",")
          .map((t) => t.trim())
          .filter((t) => t),
      };
      setProjects([...projects, newProject]);
    }

    handleCloseDialog();
  };

  // Open new project dialog
  const handleNewProject = () => {
    setFormState({
      name: "",
      status: "Active",
      team: "",
      progress: 0,
      startDate: "",
      endDate: "",
      description: "",
    });
    setIsEditing(false);
    setOpen(true);
  };

  // Open edit dialog
  const handleEditProject = (project) => {
    setFormState({
      ...project,
      team: project.team.join(", "),
    });
    setIsEditing(true);
    setOpen(true);
  };

  // Delete project
  const handleDeleteProject = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  // Close dialog
  const handleCloseDialog = () => {
    setOpen(false);
    setFormState({
      name: "",
      status: "Active",
      team: "",
      progress: 0,
      startDate: "",
      endDate: "",
      description: "",
    });
    setIsEditing(false);
  };

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800";
      case "Completed":
        return "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800";
      case "On Hold":
        return "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800";
      default:
        return "bg-gray-50 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800";
    }
  };

  // Get status icon
  const getStatusIcon = (status) => {
    switch (status) {
      case "Active":
        return <TrendingUp className="w-4 h-4" />;
      case "Completed":
        return <CheckCircle className="w-4 h-4" />;
      case "On Hold":
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Projects" value={totalProjects} />
        <StatCard title="Active Projects" value={activeProjects} />
        <StatCard title="Completed Projects" value={completedProjects} />
      </div>

      {/* Main Content Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold dark:text-white text-gray-900">
              Projects
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Manage and track all your projects
            </p>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                onClick={handleNewProject}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Create Project
              </Button>
            </DialogTrigger>

            {/* Project Form Dialog */}
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold">
                  {isEditing ? "Edit Project" : "Create New Project"}
                </DialogTitle>
                <DialogDescription>
                  {isEditing
                    ? "Update the project details"
                    : "Add a new project to track"}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                {/* Project Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Name
                  </label>
                  <Input
                    placeholder="Enter project name"
                    value={formState.name}
                    onChange={(e) =>
                      handleFormChange("name", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    placeholder="Enter project description"
                    value={formState.description}
                    onChange={(e) =>
                      handleFormChange("description", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    rows="3"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Status
                  </label>
                  <select
                    value={formState.status}
                    onChange={(e) =>
                      handleFormChange("status", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option>Active</option>
                    <option>On Hold</option>
                    <option>Completed</option>
                  </select>
                </div>

                {/* Progress */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Progress (%)
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={formState.progress}
                      onChange={(e) =>
                        handleFormChange("progress", parseInt(e.target.value))
                      }
                      className="flex-1"
                    />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 w-12">
                      {formState.progress}%
                    </span>
                  </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Start Date
                    </label>
                    <input
                      type="date"
                      value={formState.startDate}
                      onChange={(e) =>
                        handleFormChange("startDate", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      End Date
                    </label>
                    <input
                      type="date"
                      value={formState.endDate}
                      onChange={(e) =>
                        handleFormChange("endDate", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>

                {/* Team Members */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Team Members (comma-separated)
                  </label>
                  <Input
                    placeholder="Enter team member names"
                    value={formState.team}
                    onChange={(e) => handleFormChange("team", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <DialogClose asChild>
                  <Button
                    onClick={handleCloseDialog}
                    className="px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  onClick={handleSaveProject}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg"
                >
                  {isEditing ? "Update Project" : "Create Project"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white w-full"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option>All</option>
            <option>Active</option>
            <option>On Hold</option>
            <option>Completed</option>
          </select>
        </div>

        {/* Projects Table */}
        {filteredProjects.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">
                    Project Name
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">
                    Status
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">
                    Progress
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">
                    Team
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">
                    Duration
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((project, index) => (
                  <tr
                    key={project.id}
                    className={`border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${
                      index === filteredProjects.length - 1
                        ? "border-b-0"
                        : ""
                    }`}
                  >
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {project.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {project.description}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {getStatusIcon(project.status)}
                        {project.status}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-cyan-500 h-2 rounded-full transition-all"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {project.progress}%
                      </p>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {project.team.length} members
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
                        <Calendar className="w-4 h-4" />
                        {new Date(project.startDate).toLocaleDateString()} -{" "}
                        {new Date(project.endDate).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEditProject(project)}
                          className="p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(project.id)}
                          className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No projects found. Try adjusting your filters or create a new
              project.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;