using System.Security.Cryptography;
using System.Text;

namespace Hen.DAL.Security
{
    public class PBKDF2Password
    {
        public static PBKDF2Password Default { get; } = new PBKDF2Password(18500, 32, 20, HashAlgorithmName.SHA1);


        public static PBKDF2Password Current { get; } = new PBKDF2Password(18500, 32, 20, HashAlgorithmName.SHA256);


        protected virtual int OutputSize { get; }

        protected virtual int SaltSize { get; }

        protected virtual int IterationsCount { get; }

        protected virtual HashAlgorithmName HashAlgorithmName { get; }

        public PBKDF2Password(int iterationsCount, int saltSize, int outputSize, HashAlgorithmName hashAlgorithmName)
        {
            IterationsCount = iterationsCount;
            SaltSize = saltSize;
            OutputSize = outputSize;
            HashAlgorithmName = hashAlgorithmName;
        }

        public PBKDF2PasswordInfo CreateNewPassword(string password)
        {
            byte[] passwordSalt = GenerateSalt(SaltSize);
            byte[] passwordHash = ComputeHash(password, passwordSalt);
            return new PBKDF2PasswordInfo(passwordSalt, passwordHash);
        }

        public byte[] ComputeHash(string password, byte[] passwordSalt)
        {
            using Rfc2898DeriveBytes rfc2898DeriveBytes = new Rfc2898DeriveBytes(Encoding.UTF8.GetBytes(password), passwordSalt, IterationsCount, HashAlgorithmName);
            return rfc2898DeriveBytes.GetBytes(OutputSize);
        }

        protected virtual byte[] GenerateSalt(int size)
        {
            return RandomNumberGenerator.GetBytes(size);
        }
    }

    public class PBKDF2PasswordInfo
    {
        public byte[] PasswordSalt { get; }

        public byte[] PasswordHash { get; }

        public PBKDF2PasswordInfo(byte[] passwordSalt, byte[] passwordHash)
        {
            PasswordSalt = passwordSalt;
            PasswordHash = passwordHash;
        }
    }
}