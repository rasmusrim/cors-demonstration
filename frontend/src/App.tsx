import React, {useState} from "react";
import "./App.css";
import {Button, TextField, Box} from "@material-ui/core";
import styled from "styled-components";
import {NoHeaders} from "./no-header-requests";
import {WithHeaders} from "./with-header-requests";
import {WithPreflight} from "./with-preflight-requests";


function App(): JSX.Element {
    const [response, setResponse] = useState<string>("");

    return (
        <Page>
            <Row>
                <Column>

                    <h3>No headers in backend</h3>
                    <StyledButton variant={"contained"} onClick={() => doRequest(NoHeaders.sendSimpleGetRequest)}>
                        Send simple GET request
                    </StyledButton>
                    <StyledButton variant={"contained"} onClick={() => doRequest(NoHeaders.sendSimpleOpaqueGetRequest)}>
                        Send simple opaque GET request
                    </StyledButton>
                </Column>

                <Column>
                    <h3>Headers in backend</h3>
                    <StyledButton variant={"contained"} color="secondary"
                                  onClick={() => doRequest(WithHeaders.sendGetRequest)}>
                        Send GET request
                    </StyledButton>
                    <StyledButton variant={"contained"} color="secondary"
                                  onClick={() => doRequest(WithHeaders.sendPostRequest)}>
                        Send POST request
                    </StyledButton>
                    <StyledButton variant={"contained"} color="secondary"
                                  onClick={() => doRequest(WithHeaders.sendPostRequestWithFunnyHeader)}>
                        Send POST request with funny header
                    </StyledButton>
                    <StyledButton variant={"contained"} color="secondary"
                                  onClick={() => doRequest(WithHeaders.sendDeleteRequest)}>
                        Send DELETE request
                    </StyledButton>

                </Column>
                <Column>
                    <h3>Headers and preflight support in backend</h3>
                    <StyledButton variant={"contained"} color="primary"
                                  onClick={() => doRequest(WithPreflight.sendPostRequestWithFunnyHeader)}>
                        Send POST request with funny header
                    </StyledButton>
                    <StyledButton variant={"contained"} color="primary"
                                  onClick={() => doRequest(WithPreflight.sendDeleteRequest)}>
                        Send DELETE request
                    </StyledButton>

                </Column>

            </Row>
            <Box component={"div"}>
                <TextField multiline value={response}/>
            </Box>

        </Page>
    );

    function doRequest(requestFunction: () => Promise<string>) {
        requestFunction().then(response => setResponse(response));
    }

}


export default App;

const StyledButton = styled(Button)`
  display: block !important;
  margin-bottom: 10px !important;
  width: 300px;
`;

const Page = styled.div`
    margin: 30px;`

const Row = styled.div`
    display: flex;
    flex-direction: row;`

const Column = styled.div`
margin-right: 30px;
    `;