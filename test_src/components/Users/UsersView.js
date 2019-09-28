import React from "react";
import { Flex, Box, CardContainer, Button, Input } from "./List/node_modules/components/UI";
import List from "./List";

const Users = ({ onNew, query, onQueryChange }) => (
    <CardContainer width={1} title="Users" heading>
        <Flex flexWrap="nowrap">
            <Box p={1} width={1}>
                <Input
                    value={query}
                    onChange={onQueryChange}
                    placeholder="Search..."
                />
            </Box>
            <Box p={1}>
                <Button onClick={onNew} type="primary" icon="plus">
                    New
                </Button>
            </Box>
        </Flex>
        <Flex>
            <Box width={1} p={1}>
                <List />
            </Box>
        </Flex>
    </CardContainer>
);

export default Users;
