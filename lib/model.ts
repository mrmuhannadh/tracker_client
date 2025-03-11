import { Database } from "./database";

export type IEmployeeProfile = Database['public']['Tables']['employee_profile']['Row'];
export type IIdleLogs = Database['public']['Tables']['idle_logs']['Row'];
export type ILoyality = Database['public']['Tables']['loyality']['Row'];
export type ILoyalityLogs = Database['public']['Tables']['loyality_logs']['Row'];
export type IOrgProfile = Database['public']['Tables']['org_profile']['Row'];