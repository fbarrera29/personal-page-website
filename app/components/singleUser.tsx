import { Button, Card, Heading, WrapItem, Avatar, Stack, CardBody, Text, CardFooter } from '@chakra-ui/react';
import { _deleteUser } from '../src/api';
import User from '../src/models/user';

const SingleUser: React.FC<{
    user: User;
    key: number;
    onDeleteUser: (email: string) => void;
}> = props => {
    const image = require('../public/prova.jpg');
    return (
        <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
            <img src='../public/prova.jpg' alt='My Image' />

            <Stack>
                <CardBody>
                    <Heading size='md'>
                        {props.user.name} {props.user.surname}
                    </Heading>

                    <Text py='2'>{props.user.email}</Text>
                </CardBody>

                <CardFooter>
                    <Button variant='solid' colorScheme='blue' onClick={() => props.onDeleteUser(props.user.email)}>
                        Delete user
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    );
};

export default SingleUser;