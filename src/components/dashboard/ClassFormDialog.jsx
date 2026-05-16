import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/Button";

const ClassFormDialog = ({
  open,
  setOpen,
  trigger,
  isEditing,
  formState,
  onChange,
  onSubmit,
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Class" : "Create Class"}</DialogTitle>
          <DialogDescription>
            {isEditing ? "Update the class details." : "Add a new class with the fields below."}
          </DialogDescription>
        </DialogHeader>

        <form className="grid gap-4 py-4" onSubmit={onSubmit}>
          <label className="grid gap-2 text-sm text-gray-700 dark:text-gray-200">
            Class Name
            <input
              value={formState.name}
              onChange={(e) => onChange("name", e.target.value)}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-3 py-2 text-sm"
              placeholder="Class 6"
            />
          </label>

          <div className="grid grid-cols-2 gap-4">
            <label className="grid gap-2 text-sm text-gray-700 dark:text-gray-200">
              Capacity
              <input
                type="number"
                min="0"
                value={formState.capacity}
                onChange={(e) => onChange("capacity", e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-3 py-2 text-sm"
              />
            </label>
            <label className="grid gap-2 text-sm text-gray-700 dark:text-gray-200">
              Total Seats
              <input
                type="number"
                min="0"
                value={formState.total}
                onChange={(e) => onChange("total", e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-3 py-2 text-sm"
              />
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <label className="grid gap-2 text-sm text-gray-700 dark:text-gray-200">
              Level
              <input
                type="number"
                min="1"
                value={formState.level}
                onChange={(e) => onChange("level", e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-3 py-2 text-sm"
              />
            </label>
            <label className="grid gap-2 text-sm text-gray-700 dark:text-gray-200">
              Shift
              <input
                value={formState.shift}
                onChange={(e) => onChange("shift", e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-3 py-2 text-sm"
              />
            </label>
            <label className="grid gap-2 text-sm text-gray-700 dark:text-gray-200">
              Teacher
              <input
                value={formState.teacher}
                onChange={(e) => onChange("teacher", e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-3 py-2 text-sm"
              />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className="grid gap-2 text-sm text-gray-700 dark:text-gray-200">
              Subject
              <input
                value={formState.subject}
                onChange={(e) => onChange("subject", e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-3 py-2 text-sm"
              />
            </label>
            <label className="grid gap-2 text-sm text-gray-700 dark:text-gray-200">
              Room
              <input
                value={formState.room}
                onChange={(e) => onChange("room", e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-3 py-2 text-sm"
              />
            </label>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">{isEditing ? "Save changes" : "Create class"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ClassFormDialog;
