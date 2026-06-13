const STEPS = [
  { id: 1, label: 'Payment Method' },
];

/**
 * @param {{ activeStep?: number }} props
 */
export default function CheckoutSteps({ activeStep = 1 }) {
  return (
    <nav
      aria-label="Checkout progress"
      className="flex items-start justify-center gap-6 sm:gap-10"
    >
      {STEPS.map((step) => {
        const isActive = step.id === activeStep;
        const isComplete = step.id < activeStep;

        return (
          <div key={step.id} className="flex min-w-[112px] flex-col items-center gap-2">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold shadow-sm transition-colors ${
                isActive || isComplete
                  ? 'border-[#6aab8e] bg-[#6aab8e] text-white'
                  : 'border-gray-200 bg-white text-gray-500'
              }`}
            >
              {step.id}
            </div>
            <span
              className={`text-center text-sm font-semibold ${
                isActive ? 'text-gray-900' : 'text-gray-500'
              }`}
            >
              {step.label}
            </span>
            {isActive ? (
              <span className="h-1 w-full max-w-[96px] rounded-full bg-[#6aab8e]" aria-hidden />
            ) : (
              <span className="h-1 w-full max-w-[96px] rounded-full bg-gray-100" aria-hidden />
            )}
          </div>
        );
      })}
    </nav>
  );
}
