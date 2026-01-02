import { useCallback, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useAppStore } from '@/store/app-store';
import { validateProjectPath } from '@/lib/validate-project-path';

/**
 * Hook for cycling through project history with path validation.
 *
 * Provides functions to navigate to the previous or next project in the history,
 * automatically validating each project's path before switching. Invalid projects
 * are silently skipped (no dialog shown). Only projects that exist in the store
 * are considered. When a valid project is found, it switches to that project
 * and navigates to the '/board' route.
 *
 * @returns An object containing:
 *   - `cyclePrevProject`: Function to cycle to the previous project in history
 *   - `cycleNextProject`: Function to cycle to the next project in history
 *   - `isValidating`: Boolean indicating if a validation/cycling operation is in progress
 */
export function useValidatedProjectCycling() {
  const navigate = useNavigate();
  const { projects, projectHistory, currentProject } = useAppStore();
  const [isValidating, setIsValidating] = useState(false);

  // Helper to switch project without reordering history (mirrors store's cycling behavior)
  const switchProjectForCycling = useCallback(
    (project: typeof currentProject, validHistory: string[], newIndex: number) => {
      useAppStore.setState({
        currentProject: project,
        projectHistory: validHistory,
        projectHistoryIndex: newIndex,
        currentView: 'board' as const,
      });
    },
    []
  );

  const cyclePrevProject = useCallback(async () => {
    if (isValidating || projectHistory.length <= 1) return;

    setIsValidating(true);
    try {
      // Filter history to only include projects that exist in the store
      const validHistory = projectHistory.filter((id) => projects.some((p) => p.id === id));

      if (validHistory.length <= 1) return;

      // Find current position in valid history
      const currentProjectId = currentProject?.id;
      let currentIndex = currentProjectId ? validHistory.indexOf(currentProjectId) : 0;

      if (currentIndex === -1) currentIndex = 0;

      // Try cycling through projects until we find a valid one
      let attempts = 0;
      const maxAttempts = validHistory.length;

      while (attempts < maxAttempts) {
        // Move to the next index (going back in history = higher index), wrapping around
        const newIndex = (currentIndex + 1 + attempts) % validHistory.length;
        const targetProjectId = validHistory[newIndex];
        const targetProject = projects.find((p) => p.id === targetProjectId);

        if (targetProject && targetProject.id !== currentProject?.id) {
          // Validate the project path
          const isValid = await validateProjectPath(targetProject);

          if (isValid) {
            // Found a valid project - switch to it without reordering history
            switchProjectForCycling(targetProject, validHistory, newIndex);
            navigate({ to: '/board' });
            return;
          }
          // If invalid, just skip to the next one (no dialog)
        }

        attempts++;
      }

      // No valid projects found in history
      console.warn('No valid projects found in history');
    } finally {
      setIsValidating(false);
    }
  }, [isValidating, projectHistory, projects, currentProject, switchProjectForCycling, navigate]);

  const cycleNextProject = useCallback(async () => {
    if (isValidating || projectHistory.length <= 1) return;

    setIsValidating(true);
    try {
      // Filter history to only include projects that exist in the store
      const validHistory = projectHistory.filter((id) => projects.some((p) => p.id === id));

      if (validHistory.length <= 1) return;

      // Find current position in valid history
      const currentProjectId = currentProject?.id;
      let currentIndex = currentProjectId ? validHistory.indexOf(currentProjectId) : 0;

      if (currentIndex === -1) currentIndex = 0;

      // Try cycling through projects until we find a valid one
      let attempts = 0;
      const maxAttempts = validHistory.length;

      while (attempts < maxAttempts) {
        // Move to the previous index (going forward = lower index), wrapping around
        // Use proper modulo for negative numbers to correctly cycle through indices
        const newIndex =
          (((currentIndex - 1 - attempts) % validHistory.length) + validHistory.length) %
          validHistory.length;
        const targetProjectId = validHistory[newIndex];
        const targetProject = projects.find((p) => p.id === targetProjectId);

        if (targetProject && targetProject.id !== currentProject?.id) {
          // Validate the project path
          const isValid = await validateProjectPath(targetProject);

          if (isValid) {
            // Found a valid project - switch to it without reordering history
            switchProjectForCycling(targetProject, validHistory, newIndex);
            navigate({ to: '/board' });
            return;
          }
          // If invalid, just skip to the next one (no dialog)
        }

        attempts++;
      }

      // No valid projects found in history
      console.warn('No valid projects found in history');
    } finally {
      setIsValidating(false);
    }
  }, [isValidating, projectHistory, projects, currentProject, switchProjectForCycling, navigate]);

  return {
    cyclePrevProject,
    cycleNextProject,
    isValidating,
  };
}
