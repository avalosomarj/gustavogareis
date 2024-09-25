import mailerService from '@/services/mailerService'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const data = await request.json()
  const response = await mailerService(data)

  if (response == 500) {
    return NextResponse.json({ status: 500, message: "El servicio no se encuentra funcionando, intente más tarde. Disculpe las molestias" })
  }
  else {
    return NextResponse.json({ status: 200, message: "Gracias por tu consulta! En breve te contactaremos" })
  }
}