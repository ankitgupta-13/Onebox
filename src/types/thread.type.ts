export interface Thread {
  id: number;
  fromName: string;
  fromEmail: string;
  inReplyTo: string;
  isRead: boolean;
  messageId: string;
  sentAt: string;
  subject: string;
  threadId: number;
  toEmail: string;
  title: string;
  body: string;
}
