import { Teacher } from './subjects/Teacher';
import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';

export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

export const cTeacher: Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10,
};

console.log('C++: ', cpp.getRequirements());
cpp.setTeacher(cTeacher);
console.log('C++: ', cpp.getAvailableTeacher());

console.log('Java: ', java.getRequirements());
java.setTeacher(cTeacher);
console.log('Java: ', java.getAvailableTeacher());

console.log('React: ', react.getRequirements());
react.setTeacher(cTeacher);
console.log('React: ', react.getAvailableTeacher());
