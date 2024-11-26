export interface UserData {
    name: string;
    cif: string;
    career: string;
    email: string;
    phone: string;
  }
  
  export interface PDFRenderProps {
    blob: Blob | null;
    url: string | null;
    loading: boolean;
    error: Error | null;
  }
  
  