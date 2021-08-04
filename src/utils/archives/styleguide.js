import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import Button from 'components/UI/Button';
import Typography from 'components/UI/Typography';
import Input from 'components/UI/Input';
import InputGroup from 'components/UI/InputGroup';
import Form from 'components/UI/Form';
import Link from 'components/UI/Link';
import { StyleguideContainer } from 'components/Pages/Styleguide/styles';

const Styleguide = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
  });
  const [formStateTwo, setFormStateTwo] = useState({
    name: '',
  });
  const [formState3, setFormState3] = useState({
    name: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const submitHandler2 = (e) => {
    e.preventDefault();
  };

  const submitHandler3 = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setHasCompleted(true);
    }, 4000);
  };

  return (
    <StyleguideContainer>
      <div>
        <Icon theme="account" />
        <Icon theme="checkmark" />
        <Icon theme="facebook" />
        <Icon theme="hello" />
        <Icon theme="hello-darwin-logo-dark" />
        <Icon theme="hello-darwin-logo-light" />
        <Icon theme="instagram" />
        <Icon theme="linkedin" />
        <Icon theme="paper-plane" />
        <Icon theme="pinterest" />
        <Icon theme="search" />
        <Icon theme="swirl" />
        <Icon theme="twitter" />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Button
          isLoading={isLoading}
          hasCompleted={hasCompleted}
          theme="primary"
        >
          Primary Button
        </Button>
        <Button disabled theme="primary">
          Primary Button
        </Button>
        <Button
          theme="primary"
          isLoading={isLoading}
          hasCompleted={hasCompleted}
          withIcon="paper-plane"
        >
          Primary Button
        </Button>
        <Button theme="primary" disabled withIcon="paper-plane">
          Primary Button
        </Button>
        <Button
          theme="primary"
          isLoading={isLoading}
          hasCompleted={hasCompleted}
          withIcon="paper-plane"
        />
        <Button theme="primary" withIcon="paper-plane" disabled />

        <Button
          isShrinked={true}
          isLoading={isLoading}
          hasCompleted={hasCompleted}
          theme="primary"
        >
          Primary Button Small
        </Button>
        <Button isShrinked={true} disabled theme="primary">
          Primary Button Small
        </Button>
        <Button
          isShrinked={true}
          isLoading={isLoading}
          hasCompleted={hasCompleted}
          withIcon="paper-plane"
          theme="primary"
        >
          Primary Button Small
        </Button>
        <Button
          isShrinked={true}
          disabled
          withIcon="paper-plane"
          theme="primary"
        >
          Primary Button Small
        </Button>
        <Button
          theme="primary"
          isLoading={isLoading}
          hasCompleted={hasCompleted}
          withIcon="paper-plane"
        />
        <Button theme="primary" disabled withIcon="paper-plane" />

        <Button
          isLoading={isLoading}
          hasCompleted={hasCompleted}
          theme="secondary"
        >
          Secondary Button
        </Button>
        <Button disabled theme="secondary">
          Secondary Button
        </Button>
        <Button
          isLoading={isLoading}
          hasCompleted={hasCompleted}
          theme="secondary"
          withIcon="paper-plane"
        >
          Secondary Button
        </Button>
        <Button disabled theme="secondary" withIcon="paper-plane">
          Secondary Button
        </Button>
        <Button
          isLoading={isLoading}
          hasCompleted={hasCompleted}
          theme="secondary"
          withIcon="paper-plane"
        />
        <Button disabled theme="secondary" withIcon="paper-plane" />
        <div
          style={{
            width: '100%',
            background: 'rgba(0, 0,0,0.05)',
            padding: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Button
            isLoading={isLoading}
            hasCompleted={hasCompleted}
            theme="recursive"
          >
            Tertiary Button
          </Button>
          <Button disabled theme="recursive">
            Tertiary Button
          </Button>
          <Button
            isLoading={isLoading}
            hasCompleted={hasCompleted}
            theme="recursive"
            withIcon="paper-plane"
          >
            Tertiary Button
          </Button>
          <Button disabled theme="recursive" withIcon="paper-plane">
            Tertiary Button
          </Button>
          <Button
            isLoading={isLoading}
            hasCompleted={hasCompleted}
            theme="recursive"
            withIcon="paper-plane"
          />
          <Button disabled theme="tertiary" withIcon="paper-plane" />
        </div>
        <div className={'typography'} style={{ marginTop: 30 }}>
          <div>
            <Link to="/">Internal Link</Link>
          </div>
          <div>
            <Link to="https://www.google.com" target="_blank">
              External Link
            </Link>
          </div>
          <div>
            <Link
              onClick={(e) => {
                e.preventDefault();
                alert('custom function');
              }}
            >
              Custom Function Link
            </Link>
          </div>
          <Typography>Typography Body</Typography>
          <Typography elementTheme="small">Typography Body Small</Typography>
          <Typography elementTheme="semi-bold">Typography Semi-Bold</Typography>
          <Typography elementTheme="bold">Typography Bold</Typography>
          <Typography elementTheme="caption">Typography Caption</Typography>
          <Typography elementTheme="caption small">
            Typography Caption Small
          </Typography>
          <Typography elementTheme="overline">Typography Overline</Typography>
          <Typography elementTheme="overline small">
            Typography Overline Small
          </Typography>
          <Typography elementTheme="blockquote">
            Typography Blockquote
          </Typography>
          <Typography elementTheme="h1">Typography H1</Typography>
          <Typography elementTheme="h1 semi-bold">
            Typography H1 Semi-Bold
          </Typography>
          <Typography elementTheme="h1 bold">Typography H1 Bold</Typography>
          <Typography elementTheme="h2">Typography H2</Typography>
          <Typography elementTheme="h2 semi-bold">
            Typography H2 Semi-Bold
          </Typography>
          <Typography elementTheme="h2 bold">Typography H2 Bold</Typography>
          <Typography elementTheme="h3">Typography H3</Typography>
          <Typography elementTheme="h3 semi-bold">
            Typography H3 Semi-Bold
          </Typography>
          <Typography elementTheme="h3 bold">Typography H3 Bold</Typography>
          <Typography elementTheme="h4">Typography H4</Typography>
          <Typography elementTheme="h4 semi-bold">
            Typography H4 Semi-Bold
          </Typography>
          <Typography elementTheme="h4 bold">Typography H4 Bold</Typography>
          <Typography elementTheme="h5">Typography H5</Typography>
          <Typography elementTheme="h5 semi-bold">
            Typography H5 Semi-Bold
          </Typography>
          <Typography elementTheme="h5 bold">Typography H5 Bold</Typography>
        </div>
        <div className={'inputs-and-forms'} style={{ marginTop: 30 }}>
          <Form
            state={formState}
            setState={setFormState}
            onSubmit={submitHandler}
            throttle={300}
          >
            <InputGroup buttonInsideForm={true}>
              <Input icon={'search'} />
              <Button theme="primary" withIcon="paper-plane" />
            </InputGroup>
          </Form>
          <Typography>{`Throlled Independant Form State: ${formState.name}`}</Typography>
          <Form
            state={formStateTwo}
            setState={setFormStateTwo}
            onSubmit={submitHandler2}
          >
            <Input />
          </Form>
          <Typography>{`Not Throlled Independant Form State: ${formStateTwo.name}`}</Typography>
          <Form
            state={formState3}
            setState={setFormState3}
            onSubmit={submitHandler3}
          >
            <InputGroup>
              <Input />
              <Button theme="primary" withIcon="paper-plane" />
            </InputGroup>
          </Form>
          <Form
            state={formState3}
            setState={setFormState3}
            onSubmit={submitHandler3}
          >
            <InputGroup buttonInsideForm={true}>
              <Input />
              <Button
                isLoading={isLoading}
                hasCompleted={hasCompleted}
                type="submit"
                theme="primary"
                withIcon="paper-plane"
              >
                Submit
              </Button>
            </InputGroup>
          </Form>
        </div>
        <ul>
          <li>Unordered List Item 1</li>
          <li>Unordered List Item 2</li>
          <li>Unordered List Item 3</li>
          <li>Unordered List Item 4</li>
          <li>Unordered List Item 5</li>
          <li>Unordered List Item 6</li>
          <li>
            Unordered List Item 7
            <ul>
              <li>Unordered List Item 1 - Level 2</li>
              <li>Unordered List Item 2 - Level 2</li>
              <li>Unordered List Item 3 - Level 2</li>
            </ul>
          </li>
          <li>Unordered List Item 8 - Level 2</li>
          <li>Unordered List Item 9 - Level 2</li>
        </ul>
        <br></br>
        <ol>
          <li>Ordered List Item 1</li>
          <li>Ordered List Item 2</li>
          <li>Ordered List Item 3</li>
          <li>Ordered List Item 4</li>
          <li>Ordered List Item 5</li>
          <li>Ordered List Item 6</li>
          <li>
            Ordered List Item 7
            <ol>
              <li>Ordered List Item 1 - Level 2</li>
              <li>Ordered List Item 2 - Level 2</li>
              <li>Ordered List Item 3 - Level 2</li>
            </ol>
          </li>
          <li>Ordered List Item 8</li>
          <li>Ordered List Item 9</li>
          <li>Ordered List Item 10</li>
        </ol>
      </div>
    </StyleguideContainer>
  );
};

// Styleguide.propTypes = {};

export default Styleguide;
