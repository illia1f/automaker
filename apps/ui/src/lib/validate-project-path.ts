import type { Project } from '@/lib/electron';
import { getElectronAPI } from './electron';

export const validateProjectPath = async (project: Project): Promise<boolean> => {
  try {
    if (!project?.path) {
      console.error('[Validation] No project path provided');
      return false;
    }

    console.log('[Validation] Checking path:', project.path);

    const api = getElectronAPI();
    // Check if path exists
    const exists = await api.exists(project.path);
    console.log('[Validation] Exists result:', exists);

    if (exists !== true) {
      console.error('[Validation] Path does not exist');
      return false;
    }

    // Verify it's a directory
    const statResult = await api.stat(project.path);
    console.log('[Validation] Stat result:', statResult);

    if (!statResult.success || !statResult.stats?.isDirectory) {
      console.error('[Validation] Path is not a directory or stat failed');
      return false;
    }

    console.log('[Validation] Path is valid!');
    return true;
  } catch (error) {
    // Treat errors as invalid (permissions, network issues, etc.)
    console.error('[Validation] Exception during validation:', error);
    return false;
  }
};
