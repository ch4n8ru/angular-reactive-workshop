import { Project } from './../../projects/project.model';
import { ProjectActionTypes } from './projects.actions';

const initialProjects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    details: 'This is a sample project',
    percentComplete: 20,
    approved: false,
    customerId: null
  },
  {
    id: '2',
    title: 'Project Two',
    details: 'This is a sample project',
    percentComplete: 40,
    approved: false,
    customerId: null
  },
  {
    id: '3',
    title: 'Project Three',
    details: 'This is a sample project',
    percentComplete: 100,
    approved: true,
    customerId: null
  }
];


/* Immutable ops
  USE: 
  ARRAYS:
  CONCAT , MAP , FILTER
*/
const createProject = (projects, project) => [...projects, project];
const updateProject = (projects, project) => projects.map(p => {
  return p.id === project.id ? Object.assign({}, project) : p;
});
const deleteProject = (projects, project) => projects.filter(w => project.id !== w.id);




/* 01 Define a shape for the State */
export interface ProjectsState{
  projects: Project[];
  selectedProjId: string | null;
}

/* 02 Define Initial state */

export const initialState: ProjectsState = {
  projects :initialProjects,
  selectedProjId : null
}


/* 03 build reducer */

/* Reducer funtion is the only place the state can be UPDATED
UPDATED because it does not modify the previous state rather it creates a new state object

the second argument takes an action that describes what just happened
the reducer takes it processes and creates a new state based on the action
Action usually contains a payload
*/

export function projectsReducer(
  state:ProjectsState = initialState , action) : ProjectsState{
    switch(action.type){
      case ProjectActionTypes.ProjectSelected : 
        return {
          selectedProjId: action.payload,
          projects: state.projects
        } 
      case ProjectActionTypes.AddProject:
        return {
          projects : createProject(state.projects , action.payload),
          selectedProjId : null 
        }
        case ProjectActionTypes.UpdateProject:
        return {
          projects : updateProject(state.projects , action.payload),
          selectedProjId : null 
        }
        case ProjectActionTypes.Delete:
        return {
          projects : deleteProject(state.projects , action.payload),
          selectedProjId : null 
        }
        

      default:
        return state;
    }
}
