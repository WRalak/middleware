import { getSession } from '@/utils/getSession'
import { notFound } from 'next/navigation';
import React from 'react'

const page = async () =>{
   
  const session = await getSession();
  if (session.role !=="admin") {
    notFound(); 
  }
  return 
    <div> admin page</div>
  
};

export default page