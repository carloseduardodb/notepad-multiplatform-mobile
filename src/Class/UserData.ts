interface data {
  status: string;
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: null | boolean;
    created_at: Date;
    updated_at: Date;
  };
}

class UserData {
  static user: data | Object = {};
  static token: string | null = "";
}

export default UserData;
