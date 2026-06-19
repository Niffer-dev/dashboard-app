import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
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
      <DialogContent
        className="
          w-full max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl
          px-3 sm:px-4 md:px-6
        "
      >
        <DialogHeader>
          <DialogTitle className="text-base sm:text-lg md:text-xl lg:text-2xl">
            {isEditing ? "Edit Class" : "Create Class"}
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm md:text-base">
            {isEditing
              ? "Update the class details."
              : "Add a new class with the fields below."}
          </DialogDescription>
        </DialogHeader>

        <form
          className="grid gap-3 sm:gap-4 py-3 sm:py-4 text-xs sm:text-sm md:text-base"
          onSubmit={onSubmit}
        >
          {/* Class Name */}
          <label className="grid gap-1 sm:gap-2 text-gray-700 dark:text-gray-200">
            Class Name
            <input
              value={formState.name}
              onChange={(e) => onChange("name", e.target.value)}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-900 text-gray-900 dark:text-white 
                         px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base"
              placeholder="Class 6"
            />
          </label>

          {/* Capacity & Total Seats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <label className="grid gap-1 sm:gap-2 text-gray-700 dark:text-gray-200">
              Capacity
              <input
                type="number"
                min="0"
                value={formState.capacity}
                onChange={(e) => onChange("capacity", e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-gray-900 text-gray-900 dark:text-white 
                           px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base"
              />
            </label>
            <label className="grid gap-1 sm:gap-2 text-gray-700 dark:text-gray-200">
              Total Seats
              <input
                type="number"
                min="0"
                value={formState.total}
                onChange={(e) => onChange("total", e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-gray-900 text-gray-900 dark:text-white 
                           px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base"
              />
            </label>
          </div>

          {/* Level, Shift, Teacher */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <label className="grid gap-1 sm:gap-2 text-gray-700 dark:text-gray-200">
              Level
              <input
                type="number"
                min="1"
                value={formState.level}
                onChange={(e) => onChange("level", e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-gray-900 text-gray-900 dark:text-white 
                           px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base"
              />
            </label>
            <label className="grid gap-1 sm:gap-2 text-gray-700 dark:text-gray-200">
              Shift
              <input
                value={formState.shift}
                onChange={(e) => onChange("shift", e.target.value.toUpperCase())}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-gray-900 text-gray-900 dark:text-white 
                           px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base"
              />
            </label>
            <label className="grid gap-1 sm:gap-2 text-gray-700 dark:text-gray-200">
              Teacher
              <input
                value={formState.teacher}
                onChange={(e) => onChange("teacher", e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-gray-900 text-gray-900 dark:text-white 
                           px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base"
              />
            </label>
          </div>

          {/* Subject & Room */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <label className="grid gap-1 sm:gap-2 text-gray-700 dark:text-gray-200">
              Subject
              <input
                value={formState.subject}
                onChange={(e) => onChange("subject", e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-gray-900 text-gray-900 dark:text-white 
                           px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base"
              />
            </label>
            <label className="grid gap-1 sm:gap-2 text-gray-700 dark:text-gray-200">
              Room
              <input
                value={formState.room}
                onChange={(e) => onChange("room", e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-gray-900 text-gray-900 dark:text-white 
                           px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base"
              />
            </label>
          </div>

          {/* Footer */}
          <DialogFooter className="flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4">
            <DialogClose asChild>
              <Button
                variant="outline"
                type="button"
                className="w-full md:w-auto text-xs sm:text-sm md:text-base"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="w-full md:w-auto text-xs sm:text-sm md:text-base"
            >
              {isEditing ? "Save changes" : "Create class"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ClassFormDialog;