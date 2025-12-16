/**
 * Common utilities for worktree routes
 */

import { createLogger } from "../../lib/logger.js";
import { exec } from "child_process";
import { promisify } from "util";
import {
  getErrorMessage as getErrorMessageShared,
  createLogError,
} from "../common.js";

const logger = createLogger("Worktree");
const execAsync = promisify(exec);

/**
 * Normalize path separators to forward slashes for cross-platform consistency.
 * This ensures paths from `path.join()` (backslashes on Windows) match paths
 * from git commands (which may use forward slashes).
 */
export function normalizePath(p: string): string {
  return p.replace(/\\/g, "/");
}

/**
 * Check if a path is a git repo
 */
export async function isGitRepo(repoPath: string): Promise<boolean> {
  try {
    await execAsync("git rev-parse --is-inside-work-tree", { cwd: repoPath });
    return true;
  } catch {
    return false;
  }
}

// Re-export shared utilities
export { getErrorMessageShared as getErrorMessage };
export const logError = createLogError(logger);
