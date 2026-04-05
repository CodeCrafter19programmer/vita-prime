import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types (extend as you build out your schema)
export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
          id: number
          slug: string
          name: string
          subtitle: string
          category: string
          tag: string
          price: number
          original_price: number | null
          rating: number
          review_count: number
          description: string
          in_stock: boolean
          created_at: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string | null
          customer_name: string
          customer_phone: string
          customer_email: string
          delivery_address: string
          items: unknown
          total: number
          status: 'pending' | 'confirmed' | 'dispatched' | 'delivered'
          payment_method: 'mtn' | 'airtel' | 'card' | 'cod'
          created_at: string
        }
      }
      newsletter_subscribers: {
        Row: {
          id: number
          email: string
          subscribed_at: string
        }
      }
    }
  }
}
