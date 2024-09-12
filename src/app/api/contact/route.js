import mailerService from '@/services/mailerService'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const data = await request.json()
  const response = await mailerService(data)

  if (response == 500) {
    return NextResponse.json({ status: 500, message: "Hubo un problema al enviar tu consulta, intentá nuevamente!" })
  }
  else {
    return NextResponse.json({ status: 200, message: "Tu consulta fue enviada correctamente!" })
  }
}