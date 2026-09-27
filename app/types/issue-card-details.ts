export interface IssueCardDetails {
    title: string;
    description: string;
    owner: string;
    repo: string;
    issue_number: number;
    language: string;
    tags: {
        title: string;
        color: string;
    }[];
}