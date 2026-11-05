import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zmdqlmtlbpmcgeapjysj.supabase.co'
const supabaseKey = 'sb_publishable_Ylg1kXaJbwRavncoqjaqWg_z7NMJFi8'

export const supabase = createClient(supabaseUrl, supabaseKey)