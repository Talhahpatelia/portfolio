import type { ProjectStatus } from "@/lib/types";

/**
 * Status indicator, like the lamp on a piece of equipment.
 * Green is live, amber is beta, a ring is in progress, grey is finished.
 * The word always sits next to the lamp, so colour is never the only signal.
 */
const LAMP: Record<ProjectStatus, string> = {
  Live: "bg-lamp-live",
  Beta: "bg-lamp-beta",
  "In progress": "border-2 border-ink-2",
  Completed: "bg-ink-2",
};

export default function Lamp({ status }: { status: ProjectStatus }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <span aria-hidden="true" className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full ${LAMP[status]}`} />
      {status}
    </span>
  );
}
