const DeveloperMode = ({ title }) => {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300/70 bg-white/90 px-6 py-10 text-center shadow-sm dark:border-gray-700/70 dark:bg-gray-900/90">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">Developer mode</p>
      <h1 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">{title}</h1>
      <p className="mx-auto max-w-xl text-sm leading-6 text-gray-500 dark:text-gray-400">
        This page is still under development. We are building the dashboard experience, so content will be available soon.
      </p>
    </div>
  );
};

export default DeveloperMode;
