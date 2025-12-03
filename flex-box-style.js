import styled from "styled-components";

export const FlexBoxStyle = styled.div`
  
* {
    box-sizing: border-box;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

  .element {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    max-width: 1400px;
    margin: 0px auto;
    padding: 10px;
    border-radius: 200px;
    background-color: rgb(252, 41, 71);
    border: 2px solid red;
}
    @media (max-width: 768px) {
    .element{
    border-radius: 10px;
    }
    }


body {
    font-family: Work Sans, normal, sans-serif;
}

4
.element__item {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    padding-left: 1.5rem;
}

  .title {
    font-weight: 600;
    font-size: 32px;
    font-family: "Work Sans",arieal, sans-serif;
    text-align: center;
    color: white;
}

* {
    box-sizing: border-box;
    list-style-type: none;
    margin: 0;
    padding: 0;
}
h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
}


.sub-title {
    font-weight: 500;
    font-size: 20px;
    font-family: "Work Sans", arieal, sans-serif;
    text-align: center;
    max-width: 600px;
    color: white;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
    font-size: 30px;
    font-weight: bold;
}


`;
