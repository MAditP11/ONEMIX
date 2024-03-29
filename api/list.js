const { createClient } = require('@supabase/supabase-js');
const { async } = require('regenerator-runtime');

const SERVICE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwdWdwamxpdXp6anNuYnpzYnp2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NDA1NTQ5MiwiZXhwIjoxOTY5NjMxNDkyfQ.kE-wGYVWV1amg_3e5GTG93b_dY7o11ODmG6qLiRi59Y';
const SUPABASE_URL = 'https://jpugpjliuzzjsnbzsbzv.supabase.co';

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

const list = async (req, res) => {
  try {
    const { data: Footwear_List, error } = await supabase.from('Footwear_List').select('*');

    if (error) {
      return res.json(error);
    }

    res.json(Footwear_List);
  } catch (error) {
    return res.json(error);
  }
};

export default list;
