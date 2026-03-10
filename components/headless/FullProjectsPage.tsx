import { FullProjectsSliderView } from "@/components/ui/FullProjectsSliderView";
import { type FullProject, toFullProject } from "@/data/fullProjects";
import { getDb } from "@/lib/firebaseClient";

async function loadProjects(): Promise<{
  projects: FullProject[];
  error?: string;
}> {
  try {
    const snapshot = await getDb().collection("projects").get();
    const projects = snapshot.docs
      .map((doc) => toFullProject({ id: doc.id, ...doc.data() }))
      .filter((project): project is FullProject => project !== null);

    return { projects };
  } catch (error) {
    console.error("Error loading projects:", error);
    return {
      projects: [],
      error:
        "Could not load projects from Firebase. Check accountServiceJson and Firestore permissions.",
    };
  }
}

export async function FullProjectsPage() {
  const { projects, error } = await loadProjects();

  return (
    <FullProjectsSliderView projects={projects} loading={false} error={error} />
  );
}
