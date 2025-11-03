export interface CaseDetails {
  numeroDossier: string;
  tribunal: string;
  typeAffaire?: string;
  etatDossier?: string;
  parties?: { role: string; nom: string }[];
  historique?: { date: string; evenement: string }[];
}

export interface TimelineEvent {
  date: string;
  description: string;
  source: 'المستند' | 'عبر الإنترنت';
}

export interface AnalysisReport {
  resume: string;
  incoherences: string[];
  pointsCles: string[];
  prochainesEtapes: string[];
  timeline: TimelineEvent[];
}