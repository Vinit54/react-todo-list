{
  /* <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div> */
}

/* RESETS */
// *,
// *::before,
// *::after {
//   box-sizing: border-box;
// }

// h1,
// h2 {
//   margin-bottom: 0;
// }
// ul {
//   list-style: none;
//   padding: 0;
// }
// button {
//   border: none;
//   margin: 0;
//   padding: 0;
//   width: auto;
//   overflow: visible;
//   background: transparent;
//   color: inherit;
//   font: inherit;
//   line-height: normal;
//   -webkit-font-smoothing: inherit;
//   -moz-osx-font-smoothing: inherit;
//   -webkit-appearance: none;
// }

// button,
// input,
// textarea {
//   font-family: inherit;
//   font-size: 100%;
//   line-height: 1.15;
//   margin: 0;
// }
// button,
// input {
//   overflow: visible;
// }
// input[type="text"] {
//   border-radius: 0;
// }
// body {
//   width: 100%;
//   max-width: 68rem;
//   margin: 0 auto;
//   font: 1.6rem/1.25 Arial, sans-serif;
//   background-color: #f5f5f5;
//   color: #4d4d4d;
// }

// /*END RESETS*/
// /* GLOBAL STYLES */

// .btn {
//   padding: 0.8rem 1rem 0.7rem;
//   border: 0.2rem solid #4d4d4d;
//   cursor: pointer;
//   text-transform: capitalize;
// }
// .btn.toggle-btn {
//   border-width: 1px;
//   border-color: #d3d3d3;
// }
// .btn.toggle-btn[aria-pressed="true"] {
//   text-decoration: underline;
//   border-color: #4d4d4d;
// }
// .btn__danger {
//   color: #fff;
//   background-color: #ca3c3c;
//   border-color: #bd2130;
// }
// .btn__filter {
//   border-color: rgb(148, 86, 86);
// }
// .btn__primary {
//   color: #fff;
//   background-color: #000;
// }
// .btn-group {
//   display: flex;
//   justify-content: space-between;
// }
// .btn-group > * {
//   flex: 1 1 49%;
// }
// .btn-group > * + * {
//   margin-left: 0.8rem;
// }
// .label-wrapper {
//   margin: 0;
//   flex: 0 0 100%;
//   text-align: center;
// }

// .stack-small > * + * {
//   margin-top: 1.25rem;
// }
// .stack-large > * + * {
//   margin-top: 2.5rem;
// }

// /* END GLOBAL STYLES */
// .todoapp {
//   background: #fff;
//   margin: 2rem 0 4rem 0;
//   padding: 1rem;
//   position: relative;
//   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
// }

// .label__md {
//   line-height: 1.01567;
//   font-weight: 300;
//   padding: 0.8rem;
//   margin-bottom: 1rem;
//   text-align: center;
// }
// .input__md {
//   padding: 2rem;
//   border: 2px solid #000;
// }
// .input__lg:focus {
//   border-color: #4d4d4d;
//   box-shadow: inset 0 0 0 2px;
// }
// [class*="__lg"] {
//   display: inline-block;
//   width: 100%;
//   font-size: 1.9rem;
// }
// [class*="__lg"]:not(:last-child) {
//   margin-bottom: 1rem;
// }

// .filters {
//   width: 100%;
//   margin: unset auto;
// }
// /* Todo item styles */
// .todo {
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
// }
// .todo > * {
//   flex: 0 0 100%;
// }
// .todo-text {
//   width: 100%;
//   min-height: 4.4rem;
//   padding: 0.4rem 0.8rem;
//   border: 2px solid #565656;
// }
// .todo-text:focus {
//   box-shadow: inset 0 0 0 2px;
// }
// /* CHECKBOX STYLES */
// .td {
//   box-sizing: border-box;
//   font-family: Arial, sans-serif;
//   font-weight: 400;
//   font-size: 1.6rem;
//   line-height: 1.25;
//   display: block;
//   position: relative;
//   min-height: 44px;
//   padding-left: 40px;
//   clear: left;
// }
// .td > label::before,
// .td > input[type="checkbox"] {
//   box-sizing: border-box;
//   top: -2px;
//   left: -2px;
//   width: 44px;
//   height: 44px;
// }
// .td > input[type="checkbox"] {
//   cursor: pointer;
//   position: absolute;
//   margin: 0;
//   opacity: 0;
// }
// .td > label {
//   font-size: inherit;
//   font-family: inherit;
//   line-height: inherit;
//   display: inline-block;
//   margin-bottom: 0;
//   padding: 8px 15px 5px;
//   cursor: pointer;
// }
// .td > label::before {
//   content: "";
//   position: absolute;
//   border: 2px solid currentColor;
//   background: transparent;
// }
// .td > input[type="checkbox"]:focus + label::before {
//   border-width: 4px;
//   outline: 3px dashed #228bec;
// }
// .td > label::after {
//   box-sizing: content-box;
//   content: "";
//   position: absolute;
//   top: 11px;
//   left: 9px;
//   width: 18px;
//   height: 7px;
//   transform: rotate(-45deg);
//   border: solid;
//   border-width: 0 0 5px 5px;
//   border-top-color: transparent;
//   opacity: 0;
//   background: transparent;
// }
// .td > input[type="checkbox"]:checked + label::after {
//   opacity: 1;
// }
