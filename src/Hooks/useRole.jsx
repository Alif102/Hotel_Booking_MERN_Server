import { useQuery } from '@tanstack/react-query'
import UseAuth from './UseAuth'
import { getRole } from '../api/Auth'
const useRole = () => {
  const { user, loading } = UseAuth()
  const { data: role, isLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async () => await getRole(user?.email),
    queryKey: ['role'],
  })

  return [role, isLoading]
}

export default useRole