<script>
  import { FeedbackStore } from '../stores';
  import Card from './Card.svelte';
  export let item;

  const handleDelete = (itemID) => {
    FeedbackStore.update((currentFeedback) => {
      return currentFeedback.filter((item) => item.id != itemID);
    });
  };
</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>
  <button class="close" on:click={() => handleDelete(item.id)}>X</button>
  <p class="text-display">
    {item.text}
  </p>
</Card>

<style>
  .num-display {
    position: absolute;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #ff6a95;
    text-align: center;
    top: -10px;
    left: -10px;
    color: #fff;
    border: 1px #eee solid;
    padding: 10px;
    font-size: 19px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>
