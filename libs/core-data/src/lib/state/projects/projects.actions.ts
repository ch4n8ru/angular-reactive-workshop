import { Action } from "@ngrx/store";
import { type } from "os";
import { Project } from "../../projects/project.model";

export enum ProjectActionTypes{
    ProjectSelected = '[Projects] Selected',
    AddProject = '[Projects] Add Ne w',
    UpdateProject = '[Projects] Update Project',
    Delete = '[Projects] Delete Project',
}


export class SelectProject implements Action{
    readonly type = ProjectActionTypes.ProjectSelected;
    constructor(private payload: Project){}
}
export class AddProject implements Action{
    readonly type = ProjectActionTypes.AddProject
    constructor(private payload: Project){}
}
export class UpdateProject implements Action{
    readonly type = ProjectActionTypes.UpdateProject
    constructor(private payload: Project){}
}
export class DeleteProject implements Action{
    readonly type = ProjectActionTypes.Delete
    constructor(private payload: Project){}
}


export type ProjectActions = AddProject 
    | SelectProject
    | UpdateProject
    | DeleteProject
    ;
