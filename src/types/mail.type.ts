export interface Mail {
  createdAt: string;
  id: number;
  fromEmail: string;
  fromName: string;
  inReplyTo: string;
  isRead: boolean;
  subject: string;
  threadId: string;
  toEmail: string;
}
