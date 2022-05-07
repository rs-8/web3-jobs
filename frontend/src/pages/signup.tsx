import React from 'react'
import { Grid, Text, Input, Button } from '@geist-ui/react'
import DefaultLayout from 'src/layouts/default'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { styled } from 'src/core/styled'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const HeadlineWrapper = styled.div`
  max-width: 648px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const SignupWrapper = styled.div`
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
`

type SignupFormValues = {
  email: string
  password: string
  confirmPassword: string
}

const SignupFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password')], 'Confirm Password must be equal to password'),
})

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    clearErrors,
  } = useForm<SignupFormValues>({
    resolver: yupResolver(SignupFormSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  })

  const onSubmit: SubmitHandler<SignupFormValues> = (data) => {
    console.log(data)
  }

  return (
    <DefaultLayout>
      <Grid.Container justify='center'>
        <Grid xs={16} justify='center'>
          <Grid.Container direction='column'>
            <Grid>
              <HeadlineWrapper>
                <Text h1 font='52px'>
                  Welcome. We exist to make win easier.
                </Text>
              </HeadlineWrapper>
            </Grid>
            <Grid pt={3}>
              <SignupWrapper>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid.Container direction='column' gap={3}>
                    <Grid>
                      <Controller
                        name='email'
                        control={control}
                        render={({ field }) => (
                          <>
                            <Input
                              width={'100%'}
                              scale={5 / 3}
                              placeholder='example@email.com'
                              type={errors.email && 'error'}
                              {...field}
                              onChange={(e) => {
                                clearErrors('email')
                                field.onChange(e)
                              }}
                            >
                              <Text span font='14px' b>
                                Email *
                              </Text>
                            </Input>
                            {errors.email && (
                              <Text type='error' font='14px' p b mt={1} mb={0}>
                                {errors.email.message}
                              </Text>
                            )}
                          </>
                        )}
                      />
                    </Grid>
                    <Grid>
                      <Controller
                        name='password'
                        control={control}
                        render={({ field }) => (
                          <>
                            <Input
                              width={'100%'}
                              scale={5 / 3}
                              type={errors.password && 'error'}
                              {...field}
                              onChange={(e) => {
                                clearErrors('password')
                                field.onChange(e)
                              }}
                            >
                              <Text span font='14px' b>
                                Password *
                              </Text>
                            </Input>
                            {errors.password && (
                              <Text type='error' font='14px' p b mt={1} mb={0}>
                                {errors.password.message}
                              </Text>
                            )}
                          </>
                        )}
                      />
                    </Grid>
                    <Grid>
                      <Controller
                        name='confirmPassword'
                        control={control}
                        render={({ field }) => (
                          <>
                            <Input
                              width={'100%'}
                              scale={5 / 3}
                              type={errors.confirmPassword && 'error'}
                              {...field}
                              onChange={(e) => {
                                clearErrors('confirmPassword')
                                field.onChange(e)
                              }}
                            >
                              <Text span font='14px' b>
                                Confirm password *
                              </Text>
                            </Input>
                            {errors.confirmPassword && (
                              <Text type='error' font='14px' p b mt={1} mb={0}>
                                {errors.confirmPassword.message}
                              </Text>
                            )}
                          </>
                        )}
                      />
                    </Grid>
                    <Grid pt={1.75}>
                      <Button
                        type='success-light'
                        width='100%'
                        scale={1.35}
                        htmlType='submit'
                      >
                        Sign up
                      </Button>
                    </Grid>
                  </Grid.Container>
                </form>
              </SignupWrapper>
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </DefaultLayout>
  )
}

export default SignupPage
