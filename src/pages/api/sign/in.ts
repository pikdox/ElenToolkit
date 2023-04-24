import type { NextApiRequest, NextApiResponse } from 'next'

import { createClient } from '@supabase/supabase-js'

type Req_Data = {
  student_reg_number: string;
  password: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != 'POST') {
    res.status(405)
  }

  const data:Req_Data = JSON.parse(req.body)
  
  if (typeof data?.student_reg_number == 'undefined' || typeof data?.password == 'undefined') {
    res.status(400)
  }



  res.status(200).json({ name: 'John Doe' })
}
