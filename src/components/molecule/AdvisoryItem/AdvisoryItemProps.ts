export interface AdvisoryItemProps {
  category: string;
  text: string;
  severity?: 'info' | 'warning' | 'error' | 'success';
}
