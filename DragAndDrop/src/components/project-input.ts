import { Component } from './base-components';
import * as Validation from '../util/validation';
import { AutoBind } from '../decorators/autobind';
import { projectState } from '../state/project-state';

//ProjectInput class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
   titleInputElement: HTMLInputElement;
   descriptionInputElement: HTMLInputElement;
   peopleInputElement: HTMLInputElement;

   constructor() {
      // this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')!; or the following line
      super('project-input', 'app', true, 'user-input');

      this.titleInputElement = this.element.querySelector(
         '#title'
      ) as HTMLInputElement; //title id
      this.descriptionInputElement = this.element.querySelector(
         '#description'
      ) as HTMLInputElement; //description id
      this.peopleInputElement = this.element.querySelector(
         '#people'
      ) as HTMLInputElement; //people id

      this.configure();
   }

   configure() {
      this.element.addEventListener('submit', this.submitHandler);
   }

   renderContent() {}
   private gatherUserInput(): [string, string, number] | void {
      const enteredTitle = this.titleInputElement.value;
      const enteredDescription = this.descriptionInputElement.value;
      const enteredPeople = this.peopleInputElement.value;

      const titleValidatable: Validation.Validatable = {
         value: enteredTitle,
         required: true,
      };
      const descriptionValidatable: Validation.Validatable = {
         value: enteredDescription,
         required: true,
         minLength: 5,
      };
      const peopleValidatable: Validation.Validatable = {
         value: +enteredPeople,
         required: true,
         min: 1,
         max: 5,
      };

      if (
         !Validation.validate(titleValidatable) ||
         !Validation.validate(descriptionValidatable) ||
         !Validation.validate(peopleValidatable)
      ) {
         alert('Invalid input, please try again');
         return;
      } else {
         return [enteredTitle, enteredDescription, +enteredPeople];
      }
   }

   private clearInput() {
      this.titleInputElement.value = '';
      this.descriptionInputElement.value = '';
      this.peopleInputElement.value = '';
   }

   @AutoBind
   private submitHandler(event: Event) {
      event.preventDefault();
      const userInput = this.gatherUserInput();
      if (Array.isArray(userInput)) {
         const [title, description, people] = userInput;
         projectState.addProject(title, description, people);
         this.clearInput();
      }
   }
}
