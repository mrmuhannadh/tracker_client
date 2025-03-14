export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      employee_profile: {
        Row: {
          catzId: string | null
          created_at: string
          email: string | null
          first_name: string | null
          id: string
          is_active: boolean | null
          org_id: string | null
        }
        Insert: {
          catzId?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: string
          is_active?: boolean | null
          org_id?: string | null
        }
        Update: {
          catzId?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: string
          is_active?: boolean | null
          org_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employee_profile_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "org_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      idle_logs: {
        Row: {
          created_at: string
          emp_id: string | null
          id: string
          idle_time: number | null
          type: string | null
        }
        Insert: {
          created_at?: string
          emp_id?: string | null
          id?: string
          idle_time?: number | null
          type?: string | null
        }
        Update: {
          created_at?: string
          emp_id?: string | null
          id?: string
          idle_time?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "idle_logs_emp_id_fkey"
            columns: ["emp_id"]
            isOneToOne: false
            referencedRelation: "employee_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      loyality: {
        Row: {
          created_at: string
          exp_date: string | null
          id: string
          invoice_id: string | null
          max_device_count: number | null
          org_id: string | null
          package_type: string | null
          status: string | null
          subscription_id: string | null
        }
        Insert: {
          created_at?: string
          exp_date?: string | null
          id?: string
          invoice_id?: string | null
          max_device_count?: number | null
          org_id?: string | null
          package_type?: string | null
          status?: string | null
          subscription_id?: string | null
        }
        Update: {
          created_at?: string
          exp_date?: string | null
          id?: string
          invoice_id?: string | null
          max_device_count?: number | null
          org_id?: string | null
          package_type?: string | null
          status?: string | null
          subscription_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "loyality_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "org_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      loyality_logs: {
        Row: {
          created_at: string
          exp_date: string | null
          id: number
          invoice_id: string | null
          max_device_count: number | null
          org_id: string | null
          package_type: string | null
          subscription_id: string | null
        }
        Insert: {
          created_at?: string
          exp_date?: string | null
          id?: number
          invoice_id?: string | null
          max_device_count?: number | null
          org_id?: string | null
          package_type?: string | null
          subscription_id?: string | null
        }
        Update: {
          created_at?: string
          exp_date?: string | null
          id?: number
          invoice_id?: string | null
          max_device_count?: number | null
          org_id?: string | null
          package_type?: string | null
          subscription_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "loyality_logs_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "org_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      org_profile: {
        Row: {
          country: string | null
          created_at: string
          emp_count: number | null
          id: string
          org_catz_id: string | null
          org_name: string | null
          org_type: string | null
          package_type: string | null
          status: string | null
          website: string | null
        }
        Insert: {
          country?: string | null
          created_at?: string
          emp_count?: number | null
          id?: string
          org_catz_id?: string | null
          org_name?: string | null
          org_type?: string | null
          package_type?: string | null
          status?: string | null
          website?: string | null
        }
        Update: {
          country?: string | null
          created_at?: string
          emp_count?: number | null
          id?: string
          org_catz_id?: string | null
          org_name?: string | null
          org_type?: string | null
          package_type?: string | null
          status?: string | null
          website?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
