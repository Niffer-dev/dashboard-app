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
    // resetForm,
  } = useClasses();

  return (
    <div className="p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-semibold dark:text-white">Classes</h2>
            <div className="text-sm text-gray-500 dark:text-gray-400">Manage classes, teachers and capacity</div>
          </div>

          <ClassFormDialog
            open={open}
            setOpen={setOpen}
            isEditing={isEditing}
            formState={formState}
            onChange={handleFormChange}
            onSubmit={handleSaveClass}
            trigger={
              <Button onClick={openNewClass} className="bg-cyan-500 text-white px-4 py-2 rounded-lg">
                + Create Class
              </Button>
            }
          />
        </div>

        <ClassFilterBar
          filterType={filterType}
          setFilterType={setFilterType}
          search={search}
          setSearch={setSearch}
          showFullOnly={showFullOnly}
          setShowFullOnly={setShowFullOnly}
        />

        <ClassesTable classes={filteredClasses} onEdit={openEditClass} onDelete={handleDeleteClass} />
      </div>
    </div>
  );
};

export default Classes;
