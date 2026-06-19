// pages/Classes.jsx
import { Button } from "../components/ui/Button";
import ClassesTable from "../components/dashboard/ClassesTable";
import ClassFilterBar from "../components/dashboard/ClassFilterBar";
import ClassFormDialog from "../components/dashboard/ClassFormDialog";
import { useClasses } from "../hooks/useClasses";

const Classes = () => {
  const {
    filteredClasses,
    open,
    setOpen,
    isEditing,
    formState,
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
  } = useClasses();

  return (
    <div
      className="
        p-3 sm:p-4 md:p-6 lg:p-10
        bg-gray-100 dark:bg-gray-900 min-h-screen
        transition-colors duration-300
      "
    >
      <div
        className="
          bg-white dark:bg-gray-800 rounded-2xl shadow-sm
          p-3 sm:p-4 md:p-6 lg:p-8
        "
      >
        {/* Header */}
        <div
          className="
            flex flex-col md:flex-row md:items-center md:justify-between
            gap-3 sm:gap-4 md:gap-6 mb-4
          "
        >
          <div>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold dark:text-white">
              Classes
            </h2>
            <div className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400">
              Manage classes, teachers and capacity
            </div>
          </div>

          <ClassFormDialog
            open={open}
            setOpen={setOpen}
            isEditing={isEditing}
            formState={formState}
            onChange={handleFormChange}
            onSubmit={handleSaveClass}
            trigger={
              <Button
                onClick={openNewClass}
                className="
                  bg-cyan-500 text-white px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2
                  rounded-lg text-xs sm:text-sm md:text-base
                "
              >
                + Create Class
              </Button>
            }
          />
        </div>

        {/* Filter bar */}
        <div className="mb-4">
          <ClassFilterBar
            filterType={filterType}
            setFilterType={setFilterType}
            search={search}
            setSearch={setSearch}
            showFullOnly={showFullOnly}
            setShowFullOnly={setShowFullOnly}
          />
        </div>

        {/* Table wrapper for responsiveness */}
        <div className="overflow-x-auto">
          <ClassesTable
            classes={filteredClasses}
            onEdit={openEditClass}
            onDelete={handleDeleteClass}
          />
        </div>
      </div>
    </div>
  );
};

export default Classes;