/* Final Project in Unix */

#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>
#include <time.h>

typedef struct pthread_t{
    int position;
    int countPh; 
    pthread_mutex_t leftFork;
    pthread_mutex_t rightFork;
}Philosopher;


void threadsStart(pthread_t *threads, pthread_mutex_t *mutexes, int philosophersAmount);
int getRandomNumber(int min_range, int max_range);


void *philosopherResponse(void *arg)
{
    Philosopher *philosopher = (Philosopher*) arg;

    while (1)
    {
        //Take Forks
        pthread_mutex_lock(&philosopher->leftFork);
        printf("Philosopher %d picked fork %d\n", philosopher->position+1, philosopher->position);
        pthread_mutex_lock(&philosopher->rightFork);
        printf("Philosopher %d picked fork %d\n", philosopher->position+1, philosopher->position+1);

        //Eat
        int eatingPeriod = getRandomNumber(1,10);
        printf("Philosopher %d started eating for %d seconds\n", philosopher->position+1, eatingPeriod);
        sleep(eatingPeriod);
        printf("Philosopher %d finished eating after %d seconds\n", philosopher->position+1, eatingPeriod);

        //Put down forks
        pthread_mutex_unlock(&philosopher->leftFork);
        printf("Philosopher %d put down fork %d\n", philosopher->position+1, philosopher->position);
        pthread_mutex_unlock(&philosopher->rightFork);
        printf("Philosopher %d put down fork %d\n", philosopher->position+1, philosopher->position+1);

        //Think
        int thinkingPeriod = getRandomNumber(10,20);
        printf("Philosopher %d started thinking for %d seconds\n", philosopher->position, thinkingPeriod);
        //suspend thread - "think" for this particular amount of seconds
        sleep(thinkingPeriod);
        printf("Philosopher %d finished thinking after %d seconds\n", philosopher->position, thinkingPeriod);

    }
}

int main(int argc, char const *argv[])
{
    if (argc == 1)
    {
        fprintf(stderr,"Not Enough Arguments, try again\n");
        return 1;
    }

    int i, n;

    printf("Number of Philosophers: %s\n", argv[1]);

    n = atoi(argv[1]);

    pthread_t philosophers[n];
    pthread_mutex_t forks[n];


    //init mutex
    for(i = 0; i < n; i++)
        pthread_mutex_init(&forks[i], NULL);

    threadsStart(philosophers, forks, n);

    //Terminate Threads
    pthread_exit(NULL);

}

void threadsStart(pthread_t *threads, pthread_mutex_t *mutexes, int philosophersAmount)
{
  for(int i = 0; i < philosophersAmount; i++) {
    Philosopher *philosopher = malloc(sizeof(Philosopher));
    
    philosopher->position = i;
    philosopher->countPh = philosophersAmount;
    philosopher->leftFork = mutexes[i];
    philosopher->rightFork = mutexes[(i + 1) % philosophersAmount];
    
    pthread_create(&threads[i], NULL, philosopherResponse, (void *)philosopher);
  }
}

int getRandomNumber(int min_range, int max_range)
{
    srand(time(0));
    int result = (rand() % (max_range - min_range + 1) + min_range);
    return result;
}
