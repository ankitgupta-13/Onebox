export interface Thread {
  id: number;
  fromName: string;
  fromEmail: string;
  inReplyTo: string;
  isRead: boolean;
  messageId: string;
  sentAt: string;
  subject: string;
  threadId: string;
  toEmail: string;
  title: string;
  body: string;
}
