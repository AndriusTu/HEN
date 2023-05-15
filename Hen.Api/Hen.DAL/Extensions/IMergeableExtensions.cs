namespace Hen.DAL.Extensions;

public interface IMergeable<in T> where T : new()
{
    void Update(T newValue);
}

public static class MergeableExtensions
{
    public static void Merge<T, TKey>(this ICollection<T> items, ICollection<T> newItems, Func<T, TKey> keySelector) where T : IMergeable<T>, new()
    {
        if (keySelector is null)
        {
            throw new ArgumentNullException(nameof(keySelector));
        }

        var itemsToDelete = items.ExceptBy(newItems.Select(keySelector), keySelector).ToList();
        itemsToDelete.ForEach(item => items.Remove(item));

        foreach (var newItem in newItems)
        {
            var existing = items.FirstOrDefault(x => keySelector(x)?.Equals(keySelector(newItem)) ?? false);
            if (existing == null)
            {
                existing = new T();
                items.Add(existing);
            }

            existing.Update(newItem);
        }
    }

}
