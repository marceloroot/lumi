import { useToast } from '@/app/_components/ui/use-toast';
import { GetUser } from '@/app/api/users/routes';
import { UserProps } from '@/app/model/user/user-model';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { messageDefaultError } from '../interface';


const useFetchUsers = (filterUser: string): UseQueryResult<UserProps[], Error> => {
  const { toast } = useToast();

  const errorToast = (err: string) => {
    toast({
      variant: 'destructive',
      title: err,
    });
  };

  const queryOptions: UseQueryOptions<UserProps[], Error> = {
    queryKey: ['users', filterUser],
    queryFn: () => GetUser(filterUser),
  };

  return useQuery<UserProps[], Error>(queryOptions);
};

export default useFetchUsers;
