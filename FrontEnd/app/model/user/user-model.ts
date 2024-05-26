export interface UserProps{
  props:{
    id: string;
    createdAt:Date;
  }
};

  
export const UserInitial = {
    id: '',
    createdAt:new Date()
  };