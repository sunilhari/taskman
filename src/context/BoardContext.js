import React from "react";
import { uuid } from "uuidv4";

const STORE_KEY = "TASKMAN_STORE";
const initalEmptyState = {
  sections: []
};
const BoardActions = {
  ADD_SECTION: "ADD_SECTION",
  REMOVE_SECTION: "REMOVE_SECTION",
  UPDATE_SECTION: "UPDATE_SECTION",
  ADD_TASK: "ADD_TASK",
  REMOVE_TASK: "REMOVE_TASK",
  UPDATE_TASK: "UPDATE_TASK",
  CLOSE_TASK: "CLOSE_TASK"
};
const BoardContext = React.createContext();

function useBoardContext() {
  const context = React.useContext(BoardContext);
  if (!context) {
    console.log("BoardContext should be used with  in BoardContextProvider");
  }
  return context;
}

function BoardReducer(state, action) {
  const { type, payload } = action;
  console.log(type, payload);
  switch (type) {
    case BoardActions.ADD_SECTION: {
      const section = {
        ...payload.section,
        id: uuid(),
        tasks: []
      };
      return {
        ...state,
        sections: [...state.sections, section]
      };
    }
    case BoardActions.REMOVE_SECTION:
      const sections = state.sections.filter(
        section => section.id !== payload.id
      );
      return {
        ...state,
        sections
      };
    case BoardActions.UPDATE_SECTION:
      const updatedSections = state.sections.map(section => {
        if (section.id === payload.id) {
          const updatedSection = {
            ...section,
            ...payload
          };
          return updatedSection;
        }
        return section;
      });
      return {
        ...state,
        sections: updatedSections
      };
    case BoardActions.ADD_TASK: {
      const { id, task } = action.payload;
      const updatedSections = state.sections.map(section => {
        if (section.id === id) {
          const updatedSection = {
            ...section,
            tasks: [
              ...section.tasks,
              {
                ...task,
                name: "Task Heading",
                desc: "Task Description Goes Here",
                id: uuid()
              }
            ]
          };
          return updatedSection;
        } else {
          return section;
        }
      });
      return {
        ...state,
        sections: updatedSections
      };
    }
    case BoardActions.UPDATE_TASK: {
      const [section] = state.sections.filter(
        section => section.id === payload.sectionId
      );
      const restOfSections = state.sections.filter(
        section => section.id !== payload.sectionId
      );
      const updatedTasks = section.tasks.map(task => {
        if (task.id === payload.task.id) {
          return {
            ...task,
            ...payload.task
          };
        }
        return task;
      });
      return {
        ...state,
        sections: [
          ...(restOfSections ? restOfSections : []),
          {
            ...section,
            tasks: updatedTasks
          }
        ]
      };
    }
    case BoardActions.CLOSE_TASK: {
      const { sectionId, id } = payload;
      const [section] = state.sections.filter(
        section => section.id === sectionId
      );
      const restOfSections = state.sections.filter(
        section => section.id !== sectionId
      );
      const updatedTasks = section.tasks.filter(task => task.id !== id);
      return {
        ...state,
        sections: [
          ...(restOfSections ? restOfSections : []),
          {
            ...section,
            tasks: updatedTasks
          }
        ]
      };
    }
    default:
      return state;
  }
}
function BoardContextProvider(props) {
  const initialState = getParsedData(localStorage.getItem(STORE_KEY));
  const [state, dispatch] = React.useReducer(BoardReducer, initialState);
  const value = React.useMemo(() => {
    return [state, dispatch];
  }, [state]);
  React.useEffect(() => {
    try {
      localStorage.setItem(STORE_KEY, serializeJSON(state));
      // console.log("State", state);
    } catch (error) {
      console.log(error);
    }
  }, [state]);
  return <BoardContext.Provider {...props} value={value} />;
}

function serializeJSON(json) {
  try {
    return JSON.stringify(json);
  } catch (error) {
    console.log(error);
  }
}
function getParsedData(serializedJSON) {
  try {
    const parsedOutput = JSON.parse(serializedJSON || {});
    return parsedOutput;
  } catch (error) {
    return initalEmptyState;
  }
}
export { BoardContextProvider, useBoardContext, BoardActions };
