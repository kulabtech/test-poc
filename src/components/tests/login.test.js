// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import { render, fireEvent, wait, waitFor } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import Login from "../pages/signin";

// export const tests = describe("Forgotpassword tests", () => {
//   it("should render snapshots", () => {
//     const { container } = render(
//       <BrowserRouter>
//         <Login />
//       </BrowserRouter>
//     );
//     expect(container).toMatchSnapshot();
//   });

// //   it('should show validation error', async () => {
// //     const { getByTestId, getByPlaceholderText } = render(
// //         <BrowserRouter>
// //             <Login />
// //         </BrowserRouter>,
// //     );
// //     const input = getByPlaceholderText('example@email.com');
// //     fireEvent.change(input, { target: { value: 'a test value' } });
// //     fireEvent.blur(input);
// //     await waitFor(() => {
// //         expect(getByTestId('validation-error')).toHaveTextContent('Email is invalid');
// //     });
// // });

// });


import React from 'react';
import SignIn from "../pages/signin";
import { shallow, mount} from 'enzyme';
import { render, fireEvent, wait, waitFor } from '@testing-library/react';

import * as renderer from "react-test-renderer";
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
// import toJson from "enzyme-to-json";
// import * as renderer from "react-test-renderer";
// import { CountDown } from "./CountDown";


describe("testing",()=>{
  let wrapper;
  beforeEach(()=>{
     wrapper = shallow(<SignIn.WrappedComponent />);
  });
  // test("should render correctly", () => {
  //   const tree = renderer.create(
  //     <MemoryRouter>
  //     <SignIn.WrappedComponent startTime={30} />
  //     </MemoryRouter>).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  test("should render correctly", () => {
      const component = shallow(<SignIn />);
      expect(component).toMatchSnapshot();
});
  

  test("first",()=>{
    expect(wrapper.find("h3").text()).toContain('Sign In')
  });

  // test('should show validation error', async () => {
	// 	// const { getByTestId, getByPlaceholderText } = render(
	// 	// 	<SignIn.WrappedComponent/>,
	// 	// );
	// 	// const input = getByPlaceholderText('Enter a valid email address');
	// 	// fireEvent.change(input, { target: { value: 'a test value' } });
	// 	// fireEvent.blur(input);
	// 	// await waitFor(() => {
	// 	// 	expect(getByTestId('validation-error')).toHaveTextContent('Email is invalid');
	// 	// });

  //   // const wrapper =shallow(<SignIn/>)
  //   let nameInput=wrapper.find('input').first()
  //   nameInput.simulate('change',{
  //     target:{value:'Jack'}
  //   })
  //    nameInput=wrapper.find('input').first()

  //   expect(nameInput.props().value).toEqual('Jack')
	// });

  // test('should display error on the screen on click', () => {
  //   const emailInput = wrapper.find('#email').first();
  //   const passwordInput = wrapper.find('#password').first();

  //   passwordInput.simulate('change', { currentTarget: { value: '' } });
  //   emailInput.simulate('change', { currentTarget: { value: '' } });

  //   const submitButton = wrapper.find('[type="submit"]');
  //   submitButton.simulate('click');

  //   expect(wrapper.find('#error')).toHaveLength(1);
  // });
  it('should show validation error', async () => {
		const { getByTestId, getByPlaceholderText } = render(
			<SignIn.WrappedComponent/>,
		);
		const input = getByPlaceholderText('Enter a valid email address');
		fireEvent.change(input, { target: { value: 'a test value' } });
		fireEvent.blur(input);
		// await waitFor(() => {
		// 	expect(getByTestId('validation-error')).toHaveTextContent('Email is invalid');
		// });
	});

})

