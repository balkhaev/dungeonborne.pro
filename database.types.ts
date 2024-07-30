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
      classes: {
        Row: {
          agility: number | null
          created_at: string
          description: string | null
          faith: number | null
          id: number
          intelligence: number | null
          logo: string
          name: string
          race: number
          slug: string
          stamina: number | null
          strength: number | null
          volition: number | null
        }
        Insert: {
          agility?: number | null
          created_at?: string
          description?: string | null
          faith?: number | null
          id?: number
          intelligence?: number | null
          logo: string
          name: string
          race: number
          slug: string
          stamina?: number | null
          strength?: number | null
          volition?: number | null
        }
        Update: {
          agility?: number | null
          created_at?: string
          description?: string | null
          faith?: number | null
          id?: number
          intelligence?: number | null
          logo?: string
          name?: string
          race?: number
          slug?: string
          stamina?: number | null
          strength?: number | null
          volition?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "classes_race_fkey"
            columns: ["race"]
            isOneToOne: false
            referencedRelation: "races"
            referencedColumns: ["id"]
          },
        ]
      }
      guides: {
        Row: {
          author: string | null
          content: string | null
          created_at: string
          id: number
          image: string | null
          title: string | null
        }
        Insert: {
          author?: string | null
          content?: string | null
          created_at?: string
          id?: number
          image?: string | null
          title?: string | null
        }
        Update: {
          author?: string | null
          content?: string | null
          created_at?: string
          id?: number
          image?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "guides_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      mobs: {
        Row: {
          comment: string | null
          created_at: string
          description: string | null
          id: number
          image: string | null
          name: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
        }
        Relationships: []
      }
      news: {
        Row: {
          author: string | null
          content: string | null
          created_at: string
          id: number
          image: string | null
          title: string | null
        }
        Insert: {
          author?: string | null
          content?: string | null
          created_at?: string
          id?: number
          image?: string | null
          title?: string | null
        }
        Update: {
          author?: string | null
          content?: string | null
          created_at?: string
          id?: number
          image?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "news_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      races: {
        Row: {
          created_at: string
          description: string | null
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      skills: {
        Row: {
          class: number | null
          created_at: string
          description: string | null
          id: number
          image: string | null
          name: string | null
        }
        Insert: {
          class?: number | null
          created_at?: string
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
        }
        Update: {
          class?: number | null
          created_at?: string
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "skills_class_fkey"
            columns: ["class"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
        ]
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
