
import UserAuthForm from '@/components/forms/user-auth-form';
import Image from "next/image"
export default function AuthenticationPage() {
  return (
    <div className="min-h-screen bg-tertiary flex items-center justify-center p-4">
      <div className="bg-custom-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="flex flex-col items-center">
          <div className="bg-quaternary rounded-full p-4 mb-4">
            <Image src="/placeholder.svg?height=64&width=64" alt="Logo" width={64} height={64} className="w-16 h-16" />
          </div>
          <h1 className="text-2xl font-bold text-primary mb-6">Welcome</h1>
        
            
            <UserAuthForm />
          
        </div>
      </div>
    </div>
  )
}