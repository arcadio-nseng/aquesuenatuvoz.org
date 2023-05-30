import {Client} from "@notionhq/client";

export const Notion = new Client({
    auth: process.env.NOTION_ACCESS_TOKEN
});

export interface INotionField {
    id: string;
    type: string;
}

export interface INotionEmailField extends INotionField {
    email: string;
    type: 'email';
}

export interface INotionNumberField extends INotionField {
    number: string;
    type: 'number';
}

export interface INotionUrlField extends INotionField {
    url: string;
    type: 'url';
}

export interface INotionFilesField extends INotionField {
    files: { file: { url: string } }[];
    type: 'files';
}

export interface INotionRichTextField extends INotionField {
    rich_text: { plain_text: string }[];
    type: 'rich_text';
}

export interface INotionTitleField extends INotionField {
    title: { plain_text: string }[];
    type: 'title';
}

export interface INotionStatusField extends INotionField {
    status: { name: 'Publicado' | 'Borrador' }[];
    type: 'status';
}

export interface INotionFile {
    name: string;
    type: 'file';
    file: { url: string, expiry_time: string }[];
}

export interface INotionTeamMember {
    Estado: INotionStatusField;
    Orden: INotionNumberField;
    Nombre: INotionTitleField;
    Ocupacion: INotionRichTextField;
    Biografia: INotionRichTextField;
    Email: INotionEmailField;
    Foto: INotionFilesField;
    Facebook: INotionUrlField;
    Twitter: INotionUrlField;
    Instagram: INotionUrlField;
    Linkedin: INotionUrlField;
}



